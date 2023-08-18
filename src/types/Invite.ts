import type { Timestamp } from "firebase/firestore"

export interface Invite {
	id: string;
	inviterId: string;
	takenById: string;
	createdAt: Timestamp;
}
