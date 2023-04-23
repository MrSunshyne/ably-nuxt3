export function getChannelNameFromId(channelId: string | string[]): string {
    const channelPrefix = 'channel_';
    return channelPrefix + channelId;
}
