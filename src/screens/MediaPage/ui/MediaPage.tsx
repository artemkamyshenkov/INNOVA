import { useCallback, useEffect, useState } from 'react';
import { useGetPhotosQuery } from '@/shared/api/mediaService';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { Page } from '@/widgets/Page';
import { Photo } from '@/widgets/Photo';
import styles from './MediaPage.module.scss';

// FIXME: Иногда выбивает ошибку при загрузке чанка

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
    // TODO: Удалить если будет ненужно
    // <Page className={styles.mediaContainer}>
    //   {photos.length > 0 && (
    //     <List
    //       height={window.innerHeight}
    //       itemCount={photos.length}
    //       itemSize={500}
    //       width={600}
    //       onItemsRendered={({ visibleStartIndex, visibleStopIndex }) => {
    //         if (visibleStopIndex === photos.length - 1) {
    //           onLoadNextPhoto();
    //         }
    //       }}
    //     >
    //       {({ index, style }: any) => (
    //         <div style={style}>
    //           <Photo photoData={photos[index]} />
    //         </div>
    //       )}
    //     </List>
    //   )}
    //   {isFetching && <PageLoader />}
    // </Page>
  );
};
export default MediaPage;
