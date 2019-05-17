import { User } from '../models/users.model';
import { Subject } from 'rxjs';

export class UserService {

    private users: User[] = [
        {
            firstName: "James",
            lastName: "Lebron",
            email: "james@lebron.COM",
            drinkPreference: "café",
            hobbies: [
                "Music",
                "Basketball"
            ]
        }
    ];

    userSubject = new Subject<User[]>();

    /**
     * Emits the users subject.
     * @author fnsanzabandi
     */
    emitUsersSubject() {
        this.userSubject.next(this.users.slice());
    }

    /**
     * Adds a user.
     * @param user 
     * @author fnsanzabandi
     */
    addUser(user: User) {
        this.users.push(user);
        this.emitUsersSubject();
    }
}