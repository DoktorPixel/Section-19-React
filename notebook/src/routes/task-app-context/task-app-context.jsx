import AddTask from '../../components-default/add-task.jsx';
import TaskList from '../../components-default/task-list.jsx';
import {
  TasksProvider,
  useTasksContext
} from '../../components-context/task-context.jsx';

export default function TaskAppContext() {
  return (
    <TasksProvider>
      {/* Оборачиваем все компоненты в провайдер контекста */}
      <TaskAppContent />
    </TasksProvider>
  );
}

function TaskAppContent() {
  const { tasks, dispatch } = useTasksContext();
  let nextId = tasks.length;

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Task list by Context</h1>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
