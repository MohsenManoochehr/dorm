const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

const roomNumber = (number) => {
  const parsed = parseInt(number);
  const remaining = parsed % 100;
  return remaining - 1;
};

const fullRoom = (room) => {
  const roomStatus = room.map((r) => r.available);
  const hasEmpty = roomStatus.find((r) => {
    return r;
  });
  return hasEmpty;
};

const storyName = (story) => {
  switch (story) {
    case "story0":
      return "طبقه همکف‌‌";
    case "story1":
      return "طبقه اول‌";
    case "story2":
      return "طبقه دوم‌";
    case "story3":
      return "طبقه سوم‌";
    case "story4":
      return "طبقه چهارم‌";
    default:
      break;
  }
};

export { e2p, p2e, sp, roomNumber, fullRoom, storyName };
