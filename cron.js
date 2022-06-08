const schedule = require('node-schedule');

const startCron = (name) => {
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [new schedule.Range(1, 5)];
  rule.hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  rule.minute = [0, 10, 20, 30, 40, 50];
  return schedule.scheduleJob(name, rule, () => {
    console.log(`${name} cron job fired`);
  });
};

const getCronList = () => {
  console.log(typeof schedule.scheduledJobs);
  return Object.values(schedule.scheduledJobs).map(job => {
    return {
      name: job.name,
    }
  });
}

module.exports = {
  startCron,
  getCronList,
}