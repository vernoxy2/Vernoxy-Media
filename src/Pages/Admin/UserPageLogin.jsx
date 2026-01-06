import React, { useState } from "react";
import {
  Clock,
  Briefcase,
  Save,
  PlusCircle,
  CheckCircle,
  XCircle,
  Coffee,
  AlertCircle,
  MessageSquare,
  Paperclip,
  Users,
  TrendingUp,
} from "lucide-react";

const UserPageLogin = () => {
  const [currentEmployee] = useState({
    id: 1,
    name: "Rahul Sharma",
    department: "Social Media",
    role: "Social Media Manager",
  });

  const [projects] = useState([
    { id: 1, name: "Instagram Campaign", type: "Social Media" },
    { id: 2, name: "Facebook Ads", type: "Social Media" },
    { id: 3, name: "LinkedIn Strategy", type: "Social Media" },
  ]);

  const [teamMembers] = useState([
    { id: 1, name: "Dhruv mistry" },
    { id: 2, name: "Nikhil Lad" },
    { id: 3, name: "Tilak tiwari" },
    { id: 4, name: "Bhumika Patel" },
    { id: 5, name: "Vrunda Patel" },
    { id: 6, name: "Divya Patel" },
  ]);

  const [workLogs, setWorkLogs] = useState([
    {
      id: 1,
      employeeId: 1,
      projectId: 1,
      date: new Date().toISOString().split("T")[0],
      task: "Created Instagram posts",
      hoursSpent: 3,
      breakTime: 0.5,
      status: "Completed",
      priority: "High",
      notes: "Used new brand guidelines",
      blockers: "",
      collaborators: [],
      mood: "productive",
    },
  ]);

  const [activeView, setActiveView] = useState("today");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [newWorkLog, setNewWorkLog] = useState({
    projectId: "",
    task: "",
    hoursSpent: "",
    breakTime: "",
    status: "In Progress",
    priority: "Medium",
    startTime: "",
    endTime: "",
    notes: "",
    blockers: "",
    collaborators: [],
    mood: "neutral",
  });

  const addWorkLog = () => {
    if (newWorkLog.projectId && newWorkLog.task && newWorkLog.hoursSpent) {
      const log = {
        ...newWorkLog,
        id: Date.now(),
        employeeId: currentEmployee.id,
        date: selectedDate,
        hoursSpent: parseFloat(newWorkLog.hoursSpent),
        breakTime: parseFloat(newWorkLog.breakTime) || 0,
      };
      setWorkLogs([...workLogs, log]);
      setNewWorkLog({
        projectId: "",
        task: "",
        hoursSpent: "",
        breakTime: "",
        status: "In Progress",
        priority: "Medium",
        startTime: "",
        endTime: "",
        notes: "",
        blockers: "",
        collaborators: [],
        mood: "neutral",
      });
      setActiveView("today");
    }
  };

  const deleteWorkLog = (id) => {
    setWorkLogs(workLogs.filter((log) => log.id !== id));
  };

  const toggleCollaborator = (memberId) => {
    const collaborators = newWorkLog.collaborators || [];
    if (collaborators.includes(memberId)) {
      setNewWorkLog({
        ...newWorkLog,
        collaborators: collaborators.filter((id) => id !== memberId),
      });
    } else {
      setNewWorkLog({
        ...newWorkLog,
        collaborators: [...collaborators, memberId],
      });
    }
  };

  const getTodayWorkLogs = () => {
    return workLogs.filter(
      (log) =>
        log.employeeId === currentEmployee.id && log.date === selectedDate
    );
  };

  const getTotalHours = () => {
    return getTodayWorkLogs().reduce((sum, log) => sum + log.hoursSpent, 0);
  };

  const getTotalBreaks = () => {
    return getTodayWorkLogs().reduce(
      (sum, log) => sum + (log.breakTime || 0),
      0
    );
  };

  const getCompleted = () => {
    return getTodayWorkLogs().filter((l) => l.status === "Completed").length;
  };

  const getProductivity = () => {
    const logs = getTodayWorkLogs();
    if (logs.length === 0) return 0;
    const completed = logs.filter((l) => l.status === "Completed").length;
    const highPriority = logs.filter(
      (l) => l.status === "Completed" && l.priority === "High"
    ).length;
    return Math.min(100, completed * 20 + highPriority * 10);
  };

  const getProjectName = (id) => {
    const proj = projects.find((p) => p.id === parseInt(id));
    return proj ? proj.name : "Unknown";
  };

  const getMemberName = (id) => {
    const member = teamMembers.find((m) => m.id === id);
    return member ? member.name : "";
  };

  return (
    <section>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white shadow-md border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Employee Work Portal
                </h1>
                <p className="text-sm text-gray-600">
                  Welcome, {currentEmployee.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Department</p>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                  {currentEmployee.department}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-600">Work Hours</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {getTotalHours().toFixed(1)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3">
                <Coffee className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-xs text-gray-600">Break Time</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {getTotalBreaks().toFixed(1)}h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {getCompleted()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-xs text-gray-600">Productivity</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {getProductivity()}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg mb-6 p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveView("today")}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeView === "today"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Today's Work
              </button>
              <button
                onClick={() => setActiveView("add")}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeView === "add"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Add Entry
              </button>
            </div>
          </div>

          {activeView === "add" && (
            <div className=" rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <PlusCircle className="w-7 h-7 text-blue-600" />
                Log Your Work
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Mood
                    </label>
                    <select
                      value={newWorkLog.mood}
                      onChange={(e) =>
                        setNewWorkLog({ ...newWorkLog, mood: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="productive">🚀 Productive</option>
                      <option value="focused">🎯 Focused</option>
                      <option value="creative">💡 Creative</option>
                      <option value="neutral">😐 Neutral</option>
                      <option value="tired">😴 Tired</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project *
                    </label>
                    <input
                      type="text"
                      value={newWorkLog.projectId}
                      onChange={(e) =>
                        setNewWorkLog({
                          ...newWorkLog,
                          projectId: e.target.value,
                        })
                      }
                      placeholder="Enter project name..."
                      className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Priority *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["High", "Medium", "Low"].map((priority) => (
                        <button
                          key={priority}
                          onClick={() =>
                            setNewWorkLog({ ...newWorkLog, priority })
                          }
                          className={`px-4 py-3 rounded-lg font-medium ${
                            newWorkLog.priority === priority
                              ? priority === "High"
                                ? "bg-red-500 text-white"
                                : priority === "Medium"
                                ? "bg-yellow-500 text-white"
                                : "bg-green-500 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {priority}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Task Description *
                  </label>
                  <textarea
                    value={newWorkLog.task}
                    onChange={(e) =>
                      setNewWorkLog({ ...newWorkLog, task: e.target.value })
                    }
                    placeholder="What did you work on today?"
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 h-24"
                  />
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Start
                    </label>
                    <input
                      type="time"
                      value={newWorkLog.startTime}
                      onChange={(e) =>
                        setNewWorkLog({
                          ...newWorkLog,
                          startTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      End
                    </label>
                    <input
                      type="time"
                      value={newWorkLog.endTime}
                      onChange={(e) =>
                        setNewWorkLog({
                          ...newWorkLog,
                          endTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Break
                    </label>
                    <input
                      type="number"
                      value={newWorkLog.breakTime}
                      onChange={(e) =>
                        setNewWorkLog({
                          ...newWorkLog,
                          breakTime: e.target.value,
                        })
                      }
                      placeholder="0.5"
                      step="0.25"
                      className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hours *
                    </label>
                    <input
                      type="number"
                      value={newWorkLog.hoursSpent}
                      onChange={(e) =>
                        setNewWorkLog({
                          ...newWorkLog,
                          hoursSpent: e.target.value,
                        })
                      }
                      placeholder="8"
                      step="0.5"
                      className="w-full px-4 py-3 border rounded-lg  bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Collaborators
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers.map((member) => (
                      <button
                        key={member.id}
                        onClick={() => toggleCollaborator(member.id)}
                        className={`px-4 py-2 rounded-lg border-2 transition  ${
                          newWorkLog.collaborators?.includes(member.id)
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-black/10 hover:border-gray-300 text-black"
                        }`}
                      >
                        {member.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Notes
                  </label>
                  <textarea
                    value={newWorkLog.notes}
                    onChange={(e) =>
                      setNewWorkLog({ ...newWorkLog, notes: e.target.value })
                    }
                    placeholder="Additional details, achievements..."
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 h-20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    Blockers
                  </label>
                  <textarea
                    value={newWorkLog.blockers}
                    onChange={(e) =>
                      setNewWorkLog({ ...newWorkLog, blockers: e.target.value })
                    }
                    placeholder="Any issues or challenges..."
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 h-20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["In Progress", "Completed", "Blocked"].map((status) => (
                      <button
                        key={status}
                        onClick={() => setNewWorkLog({ ...newWorkLog, status })}
                        className={`px-4 py-3 rounded-lg font-medium ${
                          newWorkLog.status === status
                            ? status === "Completed"
                              ? "bg-green-500 text-white"
                              : status === "In Progress"
                              ? "bg-yellow-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={addWorkLog}
                  disabled={
                    !newWorkLog.projectId ||
                    !newWorkLog.task ||
                    !newWorkLog.hoursSpent
                  }
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-3 disabled:bg-gray-300"
                >
                  <Save className="w-6 h-6" />
                  Save Work Entry
                </button>
              </div>
            </div>
          )}

          {activeView === "today" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Today's Activities
              </h2>
              {getTodayWorkLogs().length > 0 ? (
                <div className="space-y-4">
                  {getTodayWorkLogs().map((log) => (
                    <div
                      key={log.id}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-bold">
                              {getProjectName(log.projectId)}
                            </h3>
                            <span
                              className={`px-2 py-1 rounded text-xs font-bold ${
                                log.priority === "High"
                                  ? "bg-red-100 text-red-700"
                                  : log.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {log.priority}
                            </span>
                          </div>
                          <p className="text-gray-700 mt-2">{log.task}</p>
                        </div>
                        <button
                          onClick={() => deleteWorkLog(log.id)}
                          className="text-red-500"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600 mb-3">
                        <span>⏱️ {log.hoursSpent}h work</span>
                        {log.breakTime > 0 && (
                          <span>☕ {log.breakTime}h break</span>
                        )}
                        <span
                          className={`px-2 py-1 rounded ${
                            log.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : log.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {log.status}
                        </span>
                      </div>
                      {log.collaborators?.length > 0 && (
                        <div className="text-sm text-gray-600 mb-2">
                          👥 With:{" "}
                          {log.collaborators
                            .map((id) => getMemberName(id))
                            .join(", ")}
                        </div>
                      )}
                      {log.notes && (
                        <div className="bg-blue-50 p-3 rounded mt-3 text-sm">
                          <strong>Notes:</strong> {log.notes}
                        </div>
                      )}
                      {log.blockers && (
                        <div className="bg-red-50 p-3 rounded mt-3 text-sm">
                          <strong>⚠️ Blockers:</strong> {log.blockers}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <p className="text-gray-500 mb-4">No work logged yet today</p>
                  <button
                    onClick={() => setActiveView("add")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                  >
                    Add Work Entry
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserPageLogin;
