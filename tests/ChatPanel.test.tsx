import { render, screen, fireEvent } from '@testing-library/react';
import { ChatPanel, Message } from '@/components/ChatPanel';
import { vi } from 'vitest';

const messages: Message[] = [
  { id: '1', type: 'ai', content: 'Hello', timestamp: new Date() },
];

describe('ChatPanel', () => {
  it('renders messages', () => {
    render(
      <ChatPanel
        title="Test"
        modelType="A"
        messages={messages}
        isTyping={false}
        currentMessage=""
        onSend={vi.fn()}
      />
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('calls onSend when submitting', () => {
    const onSend = vi.fn();
    render(
      <ChatPanel
        title="Test"
        modelType="A"
        messages={messages}
        isTyping={false}
        currentMessage=""
        onSend={onSend}
      />
    );
    const input = screen.getByPlaceholderText('Type your message...');
    fireEvent.change(input, { target: { value: 'hi' } });
    fireEvent.submit(input.closest('form') as HTMLFormElement);
    expect(onSend).toHaveBeenCalledWith('hi');
  });
});
