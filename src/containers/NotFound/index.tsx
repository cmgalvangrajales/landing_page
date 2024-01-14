import { FormattedMessage } from 'react-intl';

import message from './NotFound.message';

const NotFound = (): JSX.Element => {
  return (
    <div className="bg-gray-300 h-screen overflow-hidden flex items-center justify-center flex-col gap-2 text-center p-2">
      <p className="text-xl text-sky-600">404</p>
      <p className="text-xl">
        <FormattedMessage {...message.title} />
      </p>
      <p>
        <FormattedMessage {...message.description} />
      </p>
    </div>
  );
};

export default NotFound;
