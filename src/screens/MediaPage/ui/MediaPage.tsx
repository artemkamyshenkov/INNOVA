import { useState } from 'react';
import { useGetPhotosQuery } from '@/shared/api/mediaService';

const MediaPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPhotosQuery(page);
  console.log(data);
  return <div>Media</div>;
};
export default MediaPage;
