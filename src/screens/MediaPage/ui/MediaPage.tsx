import { useState } from 'react';
import { useGetPhotosQuery } from '@/shared/api/mediaService';
import { Photo } from '@/widgets/Photo';
import styles from './MediaPage.module.scss';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

const MediaPage = () => {
  const [page, setPage] = useState(5);
  const { data: photos, isLoading } = useGetPhotosQuery(page);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <section className={styles.mediaContainer}>
      {photos &&
        photos.map(photo => <Photo photoData={photo} key={photo?.id} />)}
    </section>
  );
};
export default MediaPage;
