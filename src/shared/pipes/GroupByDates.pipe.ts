// import { Pipe, PipeTransform } from '@angular/core';
// import { Task } from '../models/Task';

// interface GroupedTaskByDateList {
//   [key: string]: Task[];
// }

// @Pipe({ name: 'groupByDate'})
// export class GroupByDatePipe implements PipeTransform {
//   transform(list: Array<Task>, property: string = 'taskDate'): any {
//     console.log('pipe', list);

//     const groupedList: GroupedTaskByDateList = list.reduce(
//       (previous: any, current) => {
//         let taskDate = current.taskDate.toISOString().split('T')[0];

//         if (!previous.hasOwnProperty(taskDate)) {
//           previous[taskDate] = [];
//         }

//         // if (!previous[current[property]]) {
//         //   previous[current[property]] = [];
//         // }
//         previous[taskDate].push(current);

//         return previous;
//       },
//       {}
//     );

//     return Object.keys(groupedList).map((date) => ({
//       date: date,
//       tasks: groupedList[date],
//     }));
//   }
// }
