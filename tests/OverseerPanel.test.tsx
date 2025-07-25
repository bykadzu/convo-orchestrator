import { render, screen, fireEvent } from '@testing-library/react';
import { OverseerPanel } from '@/components/OverseerPanel';
import { vi } from 'vitest';

const sessionState = {
  sessionId: '1',
  turnCount: 0,
  isPaused: false,
  pendingNotes: [],
  isActive: true,
};

describe('OverseerPanel', () => {
  it('calls pause and resume handlers', () => {
    const onPause = vi.fn();
    const onResume = vi.fn();
    render(
      <OverseerPanel
        sessionState={sessionState}
        onPause={onPause}
        onResume={onResume}
        onInjectNote={vi.fn()}
        onStartNewSession={vi.fn()}
        onExportSession={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText('Pause'));
    expect(onPause).toHaveBeenCalled();
    // simulate paused
    render(
      <OverseerPanel
        sessionState={{ ...sessionState, isPaused: true }}
        onPause={onPause}
        onResume={onResume}
        onInjectNote={vi.fn()}
        onStartNewSession={vi.fn()}
        onExportSession={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText('Resume'));
    expect(onResume).toHaveBeenCalled();
  });
});
