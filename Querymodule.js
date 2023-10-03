import nrdbQuery from "../../query";
export const accountId = 3884245;


//--------------------------------------------------------------------------------------------------------

export const relationshipquery=async()=>{
  let query=`SELECT uniqueCount(targetEntityGuid) from Relationship Where sourceEntityGuid IN ('Mzg4NDI0NXxOUjF8V09SS0xPQUR8MTUyNTUz') and targetDomain is NOT NULL facet targetEntityGuid,sourceEntityGuid,targetDomain limit MAX `
  let result= await nrdbQuery(accountId, query)
  return result
}

export const tabledataquery=async(storedata)=>{
  let query=`From SyntheticCheck SELECT  latest(result) as 'lastestresult' ,latest(error) as 'latesteroor' where entityGuid IN ('${storedata}') FACET entityGuid ,monitorName since this quarter`
  let result= await nrdbQuery(accountId, query)
  return result
}


//----------------------------------------------------------------------------------------------------------------------

//my practice code- Query
export const practiceEntity = async ()=>{
  let quary1 = `SELECT uniqueCount(targetEntityGuid) from Relationship Where sourceEntityGuid IN ('Mzg4NDI0NXxOUjF8V09SS0xPQUR8MTUyNTUz') and targetDomain is NOT NULL facet targetEntityGuid,sourceEntityGuid,targetDomain limit MAX `
  let practiceResult = await nrdbQuery(accountId, quary1)
  return practiceResult
}

export const practiceSynthetic = async (fQuery)=>{
  // console.log("data2",data2)
  let quary2 = `From SyntheticCheck SELECT  latest(result) as 'lastestresult' ,latest(error) as 'latesteroor' where entityGuid IN ('${fQuery}') FACET entityGuid ,monitorName since this quarter`
  let quaryResult = await nrdbQuery (accountId, quary2)
  return quaryResult
}
// -----------------------------------------------------------------------------------------------------










export const targetEntity = async ()=>{
  let entity = `SELECT uniqueCount(targetEntityGuid) from Relationship Where sourceEntityGuid IN ('Mzg4NDI0NXxOUjF8V09SS0xPQUR8MTUyNTUz') and targetDomain is NOT NULL facet targetEntityGuid,sourceEntityGuid,targetDomain limit MAX `
  let result1 = await nrdbQuery(accountId, entity)
  return result1
}

export const synthetic = async (data2)=>{
  console.log("data2",data2)
  let synth = `From SyntheticCheck SELECT  latest(result),latest(error) where entityGuid IN ('${data2}') FACET entityGuid ,monitorName since this quarter `
  let result2 = await nrdbQuery (accountId, synth)
  return result2
}


export const tabledata=async()=>{
    let query=`FROM K8sNodeSample select filter(average(cpuUsedCores) / average(allocatableCpuCores) * 100, where eventType() = 'K8sNodeSample') as 'CPU', filter(average(memoryWorkingSetBytes / allocatableMemoryBytes * 100), where eventType() = 'K8sNodeSample') as 'mem', filter(max(fsUsedBytes / fsCapacityBytes) * 100, where eventType() = 'K8sNodeSample') as 'disk', latest(condition.DiskPressure) AS 'diskPressure',latest(condition.MemoryPressure) AS 'memoryPressure',latest(condition.KubeletProblem) AS 'kubeltProblem',latest(condition.PIDPressure) AS 'pidPressure',latest(net.errorsPerSecond) AS 'errorsPerSecond' where clusterName='Microservices_cluster_ceq' facet nodeName limit 2000 since 30 minutes ago`
    let result= await nrdbQuery(accountId, query)
    return result
}



export const relationshipdata = async () => {
  let relationshipQuery = `SELECT uniqueCount(targetEntityGuid) from Relationship Where sourceEntityGuid IN ('Mzk2MTMzM3xOUjF8V09SS0xPQUR8MjQ2MDI') and targetDomain is NOT NULL facet targetEntityGuid,sourceEntityGuid,targetDomain,targetEntityType LIMIT MAX`
  let relationshipData = await nrdbQuery(accountId, relationshipQuery)
  return relationshipData;
}

export const awssqsData = async (sqsentityid) => {
  let sqsQuery = `SELECT sum(aws.sqs.NumberOfMessagesSent) AS 'sent_message', sum(aws.sqs.NumberOfMessagesReceived) AS  'received_message', sum(aws.sqs.NumberOfMessagesDeleted) AS 'deleted_message', sum(aws.sqs.ApproximateNumberOfMessagesVisible) AS 'visible_message', sum(aws.sqs.ApproximateNumberOfMessagesNotVisible) AS 'notVisible_message', sum(aws.sqs.ApproximateNumberOfMessagesDelayed) AS 'delayed_message', sum(aws.sqs.NumberOfEmptyReceives) AS 'empty_messages', sum(aws.sqs.ApproximateAgeOfOldestMessage) AS 'oldest_message' FROM Metric WHERE  entity.guid IN ('${sqsentityid}') SINCE 1 hour ago`;
  let sqsData = await nrdbQuery(accountId, sqsQuery);
  return sqsData;
}

export const snsDatas = async (snsentityid) => {
  let snsQuery = `SELECT sum(aws.sns.NumberOfMessagesPublished) AS 'messsages_published', sum(aws.sns.NumberOfNotificationsDelivered) AS 'notifications_delivered', sum(aws.sns.NumberOfNotificationsFailed) AS 'notifications_failed' FROM Metric WHERE  entity.guid IN ('${snsentityid}')`
  let snsData = await nrdbQuery(accountId, snsQuery)
  return snsData
}

export const rdsreceivedata = async (rdsentityid) => {
  let rdsmemoryquery = `SELECT average(aws.rds.NetworkReceiveThroughput) as 'Receive', average(aws.rds.NetworkTransmitThroughput) as 'Transmit',average(aws.rds.CPUUtilization) As 'cpu_utilization', average(aws.rds.DatabaseConnections) AS  'db_connection', average(aws.rds.ReadLatency) * 1000 AS  'read_latency' , average(aws.rds.WriteLatency) * 1000 As 'write_latency', average(aws.rds.WriteThroughput) AS 'write_throughput', average(aws.rds.ReadThroughput) AS 'read_throughput', min(aws.rds.FreeStorageSpace) AS 'free_storage'FROM  Metric Where entity.guid IN ('MzkzNjM0OXxJTkZSQXxOQXwtNTM3NDI3MDYyNzE2ODE0NDc2OA') FACET entity.name AS 'name' since 1 hour ago`
  let rdsmemorydata = await nrdbQuery(accountId, rdsmemoryquery)
  return rdsmemorydata
}

export const rdsutilization = async () => {
  let rdsutiliquery = `SELECT average(aws.rds.CPUUtilization) As 'cpu_utilization', average(aws.rds.DatabaseConnections) AS  'db_connection', average(aws.rds.ReadLatency) * 1000 AS  'read_latency' , average(aws.rds.WriteLatency) * 1000 As 'write_latency', average(aws.rds.WriteThroughput) AS 'write_throughput', average(aws.rds.ReadThroughput) AS 'read_throughput' FROM  Metric Where entity.guid IN ('MzkzNjM0OXxJTkZSQXxOQXwtNTM3NDI3MDYyNzE2ODE0NDc2OA') FACET entity.name AS 'name' since 1 hour ago`
  let rdsutilidata = await nrdbQuery(accountId, rdsutiliquery)
  return rdsutilidata
}

export const rdsquerydatas = async () => {
  let rdsquery = `SELECT average(provider.loginFailures.Average) AS 'login_failures(s)' , average(provider.queries.Average) AS 'queries(s)' FROM DatastoreSample WHERE provider='RdsDbInstance' AND entityGuid IN ('MzkzNjM0OXxJTkZSQXxOQXwtNTM3NDI3MDYyNzE2ODE0NDc2OA') SINCE 1 hour ago`
  let rdsfinaldata = await nrdbQuery(accountId, rdsquery)
  return rdsfinaldata
}