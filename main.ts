import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface ObsidianConverterSettings {
	SaveLocation: string; // directory to save converted vault, change to a button that opens a file explorer
	ExportFormat: string; // format to convert to (WorldAnvil or Plain Text), change to some sort of exclusive checkbox or bubble
}

const DEFAULT_SETTINGS: ObsidianConverterSettings = {
	SaveLocation: 'C:',
	ExportFormat: 'PlainText',
}

export default class ObsidianConverter extends Plugin {
	async onload() {
		// Add a button to the file-menu open a window to convert & export a single page
		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {
				menu.addItem((item) => {
					item
						.setTitle("Convert/Export File")
						.setIcon("document")
						.onClick(async () => {
							// add a pop-up window that asks for desired output format, and if you want to save a file or add the material to the clipboard
						});
				});
			})
		);
	}
}
