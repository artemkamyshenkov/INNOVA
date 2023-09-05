import { useCallback, useEffect, useState } from 'react';
import { useGetPhotosQuery } from '@/shared/api/mediaService';
import { Photo } from '@/widgets/Photo';
import styles from './MediaPage.module.scss';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { Page } from '@/shared/ui/Page';

const MediaPage = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPhotosQuery(page);

  const onLoadNextPhoto = useCallback(() => {
    if (!isFetching) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isFetching]);

  useEffect(() => {
    if (!isLoading && data) {
      setPhotos(prevPhotos => [...prevPhotos, ...data]);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Page className={styles.mediaContainer} onScrollEnd={onLoadNextPhoto}>
      {photos &&
        photos.map(photo => <Photo photoData={photo} key={photo?.id} />)}
      {isFetching && <PageLoader />}
    </Page>
  );
};
export default MediaPage;
