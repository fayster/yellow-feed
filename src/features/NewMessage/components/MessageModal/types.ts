export interface Props {
	hide(): void;
	createMessage(value: string): Promise<void>;
}