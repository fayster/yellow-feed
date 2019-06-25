export interface DispatchProps {
	createMessage(text: string): Promise<void>;
}