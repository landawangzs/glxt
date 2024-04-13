/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

/**
 * 控制用户的访问权限
 * @param initialState
 */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
