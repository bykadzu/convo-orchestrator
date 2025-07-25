import { render } from '@testing-library/react';
import Index from '@/pages/Index';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
      getSession: vi.fn(() => Promise.resolve({ data: { session: null } })),
    },
  },
}));

describe('Index page', () => {
  it('renders null without user', () => {
    const { container } = render(<Index />);
    expect(container.firstChild).toBeNull();
  });
});
