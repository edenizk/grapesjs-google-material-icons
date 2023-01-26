import type grapesjs from 'grapesjs';

interface IEditor extends grapesjs.Editor {
  getEl: () => HTMLElement;
}

export default IEditor