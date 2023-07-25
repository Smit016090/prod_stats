// To calculate actual system up time
const systemUpTime = (effTime, robotATime, robotBTime) => {
    let avgRobotTime = (convertH2M(robotATime) + convertH2M(robotBTime)) / 2;
    let actualSystemUPTimeInMin = convertH2M(effTime) - avgRobotTime;
    let actualSystemUPTimeInHrs = convertM2H(actualSystemUPTimeInMin)
    let timeParts = actualSystemUPTimeInHrs.split(":");
    return `${timeParts[0]} hrs ${timeParts[1]} min`;
}

// to calculate actual robot up time
const robotUpTimes = (effTime, robotTime) => {
let actualRobotUpTime = convertH2M(effTime) - convertH2M(robotTime);
return actualRobotUpTime;
}

// to convert actual system up time from min to hours
const convertM2H = (timeInMin) => {
    let hrs = timeInMin / 60;
    let rhrs = Math.floor(hrs);
    let min = (hrs - rhrs) * 60;
    let rmin = Math.floor(min);
    let sec = Math.floor((min - rmin) * 60);
    return `${rhrs}:${rmin}:${sec}`;
}

// to convert hours to min for calculation of system up time and robot up time
const convertH2M = (timeInHr) => {
    let timeParts = timeInHr.split(":");
    let timeInMin = (+timeParts[0] * 60) + +timeParts[1] + (+timeParts[2] / 60);
    return timeInMin;
}

// to calculate how many packs per hours are processed
const packsPerHour = (totalPacks, robotATime, robotBTime, effTime) => {
    let packsPerHr = totalPacks / ((robotUpTimes(effTime, robotATime) + robotUpTimes(effTime, robotBTime)) / 2);
    return Math.trunc(packsPerHr * 60 * Math.pow(10, 2)) / Math.pow(10, 2);
    // console.log(`Number of Packs processed per hour are ${Math.trunc(packsPerHr * 60 * Math.pow(10, 2)) / Math.pow(10, 2)}`);
}
// to calculate results
const results = (effTime, robotATime, robotBTime, totalPacks) => {
    let actualUpTime = systemUpTime(effTime, robotATime, robotBTime);
    let packsPerHrs = packsPerHour(totalPacks, robotATime, robotBTime, effTime);
    // console.log(`Robot A uptime is ${convertM2H(convertH2M(effTime)-convertH2M(robotATime))}`);
    // console.log(`Robot B uptime is ${convertM2H(convertH2M(effTime)-convertH2M(robotBTime))}`);
    return {actualUpTime, packsPerHrs};
}

export default results

// results(effTime, robotATime, robotBTime, totalPacks)
results("11:04:00", "2:11:03", "2:22:08", 254);