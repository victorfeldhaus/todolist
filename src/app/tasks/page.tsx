import styles from './tasks.module.css';

export default function Tasks() { 
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Todo List</h1>
                <p>Manage your tasks with ease.</p>
                <ul className={styles.todos}>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
            </main>
        </div>
    );
};