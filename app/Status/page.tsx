import Image from 'next/image';
import styles from './Status.module.css';
import { Icon } from '@iconify/react';
import Menu from  "../components/Menu/Menu";
import StreakCalendar from '../components/StreakCalendar/SteakCalendar';

export default function Status() {
    return(
        <div className={styles.statusContainer}>
            <Menu />
            <div className={styles.rightBoard}>
                <div className={styles.appStatusRow}>
                    <div className={styles.leftAppStatus}>
                        <div className={styles.notificationContainer}>
                            <Icon icon="mingcute:notification-fill" className={styles.notificationIcon} />
                            <div className={styles.notificationDot}></div>
                        </div>
                        <Icon icon="material-symbols:settings-rounded" className={styles.settingsIcon} />
                    </div>
                    <div className={styles.rightAppStatus}>
                        <div className={styles.profileText}>
                            <div className={styles.profileName}>Usuário</div>
                            <div className={styles.profileStatusContainer}>
                                <div className={styles.profileStatus}>On-line</div>
                                <div className={styles.profileStatusDot}></div>
                            </div>
                        </div>
                        <div className={styles.profileContainer}>
                            <Icon icon="iconamoon:profile-fill" className={styles.profileIcon} />
                        </div>
                    </div>
                </div>

                <div className={styles.streakContainer}>
                    <div className={styles.streakCounterContainer}>
                        <Icon icon="bi:fire" className={styles.streakIcon}></Icon>
                        <div className={styles.hole}></div>
                        <div className={styles.streakCounter}>7</div>
                    </div>
                    <div className={styles.streakTexts}>
                        <div className={styles.streakTitle}>Streak</div>
                        <div className={styles.streakSubtitle}>Realize as análises para aumentar seu streak</div>
                    </div>
                </div>

                <div className={styles.averageRow}>
                    <div className={styles.dailyAverage}>
                        <div className={styles.title}>Média Diária:</div>
                        <div className={styles.counter}>10min</div>
                    </div>
                    <div className={styles.sessionAverage}>
                        <div className={styles.sessionAverageContainer}>
                            <div className={styles.title}>Média por sessão:</div>
                            <div className={styles.counter}>68%</div>
                            <div className={styles.counterText}>Execuções realizadas de forma correta</div>
                        </div>
                    </div>
                </div>

                <StreakCalendar />


            </div>
        </div>
    )
}