import { Row } from 'react-grid-system';
import { Typography, notification } from 'antd';
import { useEffect } from 'react';
import { useGetFriendsQuery } from '@/shared/api/friendsServise';
import { Page } from '@/shared/ui/Page';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { FriendProfile } from '@/widgets/FriendProfile';
import styles from './RecommendUsers.module.scss';

const RecommendUsers = () => {
  const { data, isLoading, isError } = useGetFriendsQuery('');
  const { data: profiles = [], total = 0 } = data || {};
  const [notify, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (isError) {
      notify.error({ message: 'Ошибка загрузки пользователей' });
    }
  }, [isError, notify]);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      {contextHolder}
      <Page>
        {total && (
          <Typography.Title level={3} className={styles.totalTitle}>
            Всего пользователей: {total}
          </Typography.Title>
        )}
        {profiles.length && (
          <Row direction="column" align="center">
            {profiles.map(profile => (
              <FriendProfile profile={profile} key={profile.id} />
            ))}
          </Row>
        )}
      </Page>
    </>
  );
};

export default RecommendUsers;
