import { usePageTitle } from '@/hooks/usePageTitle';
import ChatWindow from '@/features/chat/ChatWindow';

export default function ChatPage() {
  usePageTitle('AI Chat');
  return <ChatWindow />;
}
