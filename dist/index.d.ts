import grapesjs from 'grapesjs';

export interface IEditor extends grapesjs.Editor {
	getEl: () => HTMLElement;
}
declare const plugin: (editor: IEditor, opts?: {}) => void;

export {
	plugin as default,
};

export {};
