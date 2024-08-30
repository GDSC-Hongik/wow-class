const setExpireTime = (hour: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + hour * 60 * 60 * 1000);

  return expires;
};

export default setExpireTime;
