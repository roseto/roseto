import 'react-phone-number-input/style.css'
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import type { E164Number } from "libphonenumber-js/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { app } from "@/lib/firebase/client";
import { ConfirmationResult, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SignIn() {
	const auth = getAuth(app);
	const [recaptcha, setRecaptcha] = useState<RecaptchaVerifier | null>(null);
	const [confirmResult, setConfirmResult] = useState<ConfirmationResult | null>(null);
	const [phoneNumber, setPhoneNumber] = useState<E164Number>();
	const [verificationCode, setVerificationCode] = useState<number>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!recaptcha) {

			const verifier = new RecaptchaVerifier(auth, "recaptcha", {
				size: 'invisible',
			})

			verifier.verify().then(() => setRecaptcha(verifier));
		}
	}, []);


	const sendVerificationCode = async () => {
		const result = await signInWithPhoneNumber(auth, phoneNumber?.toString()!, recaptcha!)
			.catch(error => {
				console.error(error);

				return null;
			});

		setConfirmResult(result);
	}

	const confirmVerificationCode = async () => {
		setLoading(true);
		const result = await confirmResult?.confirm(verificationCode?.toString()!)
			.catch(error => {
				console.error(error);

				return null;
			});

		if (result) {
			const res = await fetch("/api/auth/signin", {
				headers: {
					"Authorization": `Bearer ${await result.user?.getIdToken()}`,
				},
			});
			
			if (res.redirected) {
				window.location.assign(res.url);
			}
		}

	}

	return (
		<Tabs
			defaultValue="phone"
			value={confirmResult ? "verification" : "phone"}
		>
			<TabsList className="w-full">
				<TabsTrigger 
					value="phone"
					disabled={!!confirmResult}
				>
					Phone
				</TabsTrigger>
				<TabsTrigger 
					disabled={!confirmResult}
					value="verification"
				>
					Verification
				</TabsTrigger>
			</TabsList>
			<TabsContent value="phone">
				<Card>
					<CardHeader>
						<CardTitle>Phone</CardTitle>
						<CardDescription>Enter your phone number to sign in.</CardDescription>
					</CardHeader>
					<CardContent>
						<PhoneInput
							inputComponent={Input}
							value={phoneNumber}
							onChange={setPhoneNumber}
						/>
						<Button 
							className="mt-2 w-full" 
							onClick={sendVerificationCode}
							disabled={!phoneNumber}
						>
							Send verification code
						</Button>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="verification">
				<Card>
					<CardHeader>
						<CardTitle>Verification</CardTitle>
						<CardDescription>Enter the verification code sent to your phone.</CardDescription>
					</CardHeader>
					<CardContent>
						<Input
							type="number"
							placeholder="Verification code"
							value={verificationCode}
							onChange={e => setVerificationCode(parseInt(e.target.value))}
						/>
						<Button 
							className="mt-2 w-full"
							onClick={confirmVerificationCode}
							disabled={!verificationCode || loading}
						>
							Verify
						</Button>
					</CardContent>
				</Card>
			</TabsContent>
			<div id="recaptcha" />
		</Tabs>
	);
}
