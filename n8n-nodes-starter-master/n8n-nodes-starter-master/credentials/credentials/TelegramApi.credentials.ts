import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TelegramApi implements ICredentialType {
	name = 'telegramApi';                 // reference by this name in the node
	displayName = 'Telegram Bot API';
	documentationUrl = 'https://core.telegram.org/bots/api';
	properties: INodeProperties[] = [
		{
			displayName: 'Bot Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your bot token from @BotFather',
		},
	];
}
