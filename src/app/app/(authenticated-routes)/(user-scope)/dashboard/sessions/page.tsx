import SessionContents from '~/components/sections/session-content';
import SessionsHeader from '~/components/sections/session-header';

export default function Sessions() {
  return (
    <div className="mx-8 p-4">
      <SessionsHeader />
      <SessionContents />
    </div>
  );
}
