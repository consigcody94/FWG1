import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FWG Content Manager',
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; connect-src 'self' http://localhost:8081 https://unpkg.com;",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      zIndex: 9999,
      overflow: 'auto'
    }}>
      {children}
    </div>
  );
}
