import { render, screen, fireEvent } from '@testing-library/react';
import { SettingsModal } from '@/components/SettingsModal';
import { vi } from 'vitest';

describe('SettingsModal', () => {
  it('submits configuration', () => {
    const onSubmit = vi.fn();
    render(
      <SettingsModal isOpen onClose={vi.fn()} onConfigSubmit={onSubmit} />
    );
    fireEvent.change(screen.getByLabelText(/API Key/i), {
      target: { value: '123' },
    });
    fireEvent.click(screen.getByText('Start Session'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
