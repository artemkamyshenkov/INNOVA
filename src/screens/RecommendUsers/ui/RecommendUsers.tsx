import { Typography, notification } from 'antd';
import { useEffect } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { useGetFriendsQuery } from '@/shared/api/friendsServise';
import { Page } from '@/shared/ui/Page';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { FriendProfile } from '@/widgets/FriendProfile';
import styles from './RecommendUsers.module.scss';
import { randomAvatar } from '@/shared/helpers/randomAvatar';

const RecommendUsers = () => {
  const { data, isLoading, isError } = useGetFriendsQuery('');
  const { data: profiles = [], total = 0 } = data || {};
  const [notify, contextHolder] = notification.useNotification();

  const profileWithAva = profiles?.map(profile => ({
    ...profile,
    image: randomAvatar(),
  }));

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
          <AutoSizer>
            {({ height, width }: any) => (
              <List
                className="List"
                height={height}
                itemCount={profiles?.length}
                itemSize={270}
                width={width}
              >
                {({ index, style }) => (
                  <div style={style}>
                    <FriendProfile
                      profile={profileWithAva[index]}
                      // key={profiles[index].id}
                    />
                  </div>
                )}
              </List>
            )}
          </AutoSizer>
          // <Row direction="column" align="center">
          //   {profiles.map(profile => (
          //     <FriendProfile profile={profile} key={profile.id} />
          //   ))}
          // </Row>
        )}
      </Page>
    </>
  );
};

export default RecommendUsers;
