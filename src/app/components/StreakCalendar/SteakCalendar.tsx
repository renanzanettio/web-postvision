"use client";
import styles from './StreakCalendar.module.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ptBR } from 'date-fns/locale/pt-BR';

const streakDays = [
  // inicia o mês em 0
  new Date(2025, 8, 29),
  new Date(2025, 8, 30),
  new Date(2025, 9, 1),
  new Date(2025, 9, 3),
  new Date(2025, 9, 4),
  new Date(2025, 9, 6),
  new Date(2025, 9, 7),
  new Date(2025, 9, 8),
  new Date(2025, 9, 10),
  new Date(2025, 9, 11),
  new Date(2025, 9, 13),
  new Date(2025, 9, 14),
  new Date(2025, 9, 15),
  new Date(2025, 9, 17),
  new Date(2025, 9, 18),
  new Date(2025, 9, 20),
  new Date(2025, 9, 21),
  new Date(2025, 9, 22),
];

export default function StreakCalendar() {
  const selectedDays = streakDays;

  return (
    <div className={styles.calendarBoard}>
      <div className={styles.calendarContainer}>
        <DayPicker
          locale={ptBR}
          mode="multiple"
          selected={selectedDays}
          disabled={{ before: new Date(2100, 0, 1) }}
          modifiersClassNames={{
            selected: styles.streakDay,
            today: styles.todayDay,
            weekend: styles.weekendDay,
            disabled: styles.disabledDay,
            outside: styles.outsideDay,
          }}
          weekStartsOn={0}
          showOutsideDays
          styles={{
            caption: { background: 'var(--secundary-purple-600)', color: 'var(--white)', borderRadius: '8px', padding: '4px 0', fontWeight: 600, margin: 20, opacity: 0.8},
          }}
        />
      </div>
    </div>
  );
}