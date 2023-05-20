import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Pixiepia`;
  }, [title]);
};

export default usePageTitle;
