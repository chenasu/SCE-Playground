import * as reportsService from "../services/reportsService.js";

export async function getReports(req, res) {
  try {
    const reports = await reportsService.getAllReports();
    return res.status(200).json(reports);
  } catch (err) {
    console.error('Reports Service Error:', err.message);

    const statusCode = err.status || 500;
    const message = err.message || 'An unexpected error occurred in the Reports Service';

    return res.status(statusCode).json({
      error: true,
      message
    });
  }
}

export async function addReport(req, res) {
  try {
    const { report } = req.body;
    const newReport = await reportsService.addReport(report);
    return res.status(201).json(newReport);
  } catch (err) {
    console.error('Reports Service Error:', err.message);

    const statusCode = err.status || 500;
    const message = err.message || 'An unexpected error occurred in the Reports Service';

    return res.status(statusCode).json({
      error: true,
      message
    });
  }
}
