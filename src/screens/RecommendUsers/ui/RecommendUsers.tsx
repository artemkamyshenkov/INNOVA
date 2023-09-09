import { FixedSizeList as List, ListOnScrollProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useEffect, useMemo } from 'react';
import { Typography, notification } from 'antd';
import { useLocation } from 'react-router-dom';
import { useGetFriendsQuery } from '@/shared/api/friendsServise';
import { randomAvatar } from '@/shared/helpers/randomAvatar';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { FriendProfile } from '@/widgets/FriendProfile';
import { Page } from '@/widgets/Page';
import styles from './RecommendUsers.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { getUIScrollByPath, uiActions } from '@/entities/UI';
import { useThrottle } from '@/shared/hooks/useThrottle';

const RecommendUsers = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const initialScroll = useAppSelector(state =>
    getUIScrollByPath(state, pathname.slice(1)),
  );
  const { data, isLoading, isError } = useGetFriendsQuery('');
  const { data: profiles = [], total = 0 } = data || {};
  const [notify, contextHolder] = notification.useNotification();

  const onScroll = useThrottle(({ scrollOffset }: ListOnScrollProps) => {
    dispatch(
      uiActions.setScrollPosition({
        position: scrollOffset,
        path: pathname.slice(1),
      }),
    );
  }, 1000);

  const profileWithAva = useMemo(
    () =>
      profiles?.map(profile => ({
        ...profile,
        image: randomAvatar(),
      })),
    [profiles],
  );

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
                onScroll={onScroll}
                initialScrollOffset={initialScroll}
              >
                {({ index, style }) => (
                  <div style={style}>
                    <FriendProfile
                      profile={profileWithAva[index]}
                      key={profiles[index]?.id}
                    />
                  </div>
                )}
              </List>
            )}
          </AutoSizer>
        )}
      </Page>
    </>
  );
};

export default RecommendUsers;
