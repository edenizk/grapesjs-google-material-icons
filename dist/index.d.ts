import { Editor } from 'grapesjs';

export interface IEditor extends Editor {
	getEl: () => HTMLElement;
}
declare const plugin: (editor: IEditor, opts?: {}) => void;

export {
	plugin as default,
};

export {};
