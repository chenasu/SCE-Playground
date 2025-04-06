import * as db from '../data-access/db.js';

export async function getAllReports() {
  return await db.getAllReports();
}

export async function addReport(report) {
  return await db.addReport(report);
}
