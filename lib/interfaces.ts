export interface UserInterface {
  _id: string;
  name: string;
  email: string;
  profile_image: string;
  clerk_user_id: string;
  joined_servers: Array<ServerInterface>;
}

export interface ServerInterface {
  _id: string;
  name: string;
  description: string;
  uploadcare_image_id: string;
  members: Array<UserInterface>;
  voice_channels: Array<VoiceChannelInterface>;
  video_channels: Array<VideoChannelInterface>;
  text_channels: Array<TextChannelInterface>;
  total_channels: number;
  total_members: number;
  created_at: Date;
  updated_at: Date;
}

export interface VoiceChannelInterface {
  _id: string;
  name: string;
  description: string;
}

export interface VideoChannelInterface {
  _id: string;
  name: string;
  description: string;
}

export interface TextChannelInterface {
  _id: string;
  name: string;
  description: string;
  active_members: string;
  messages: Array<MessageInterface>;
}

export interface MessageInterface {
  _id: string;
  message: string;
  sender: UserInterface;
  created_at: Date;
  updated_at: Date;
}
