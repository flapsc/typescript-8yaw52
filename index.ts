import { ApiLatencies, TransitionsCSV } from './inputs';
import './style.css';
import '@extensions';
// Define transition entity

// Prepare inputs
// const isShowLatencyValue = true;
// const csvRows = TransitionsCSV.split('\n');
// const headerTransitions: string[] = csvRows.shift().split(',');
// if (isShowLatencyValue) {
//   headerTransitions.push('latency');
// }

// // Parse transitions
// const transitions: ITransition[] = csvRows.map((valueRowStr) => {
//   const values = valueRowStr.split(',');
//   return {
//     id: values[0],
//     amount: Number(values[1]) * 100, // in a cents
//     bankCountryCode: values[2],
//   };
// });
// const sortAndSlice_A = (transitions: ITransition[]) => {
//   const { maxAmount, maxLatency } = transitions.reduce<{
//     maxAmount: number;
//     maxLatency: number;
//   }>(
//     (
//       previous: { maxAmount: number; maxLatency: number },
//       current: ITransition
//     ) => {
//       const currentLatency = ApiLatencies[current.bankCountryCode];
//       return {
//         maxAmount:
//           previous.maxAmount > current.amount
//             ? previous.maxAmount
//             : current.amount,
//         maxLatency:
//           previous.maxLatency > currentLatency
//             ? previous.maxLatency
//             : currentLatency,
//       };
//     },
//     { maxAmount: 0, maxLatency: 0 }
//   );
//   return transitions
//     .sort((transitionA: ITransition, transitionB: ITransition) => {
//       const amountARatio = maxAmount / transitionA.amount;
//       const amountBRatio = maxAmount / transitionB.amount;
//       const latencyARatio =
//         maxLatency / ApiLatencies[transitionA.bankCountryCode];
//       const latencyBRatio =
//         maxLatency / ApiLatencies[transitionB.bankCountryCode];
//       const capacityA = amountARatio - latencyARatio;
//       const capacityB = amountBRatio - latencyBRatio;
//       return capacityA - capacityB;
//     })
//     .slice();
// };
// const sortAndSlice_B = (transitions: ITransition[]) => {
//   return transitions
//     .sort((transitionA: ITransition, transitionB: ITransition) => {
//       const capacityA =
//         transitionA.amount / ApiLatencies[transitionA.bankCountryCode];
//       const capacityB =
//         transitionB.amount / ApiLatencies[transitionB.bankCountryCode];
//       return capacityB - capacityA;
//     })
//     .slice();
// };
// /**
//  * Selects all transactions so that the predicted time
//  * for their processing in total does not exceed the incoming time,
//  * and also sorts by the maximum amount of the transaction itself
//  *
//  * @param {ITransition[]} transitions Transitions that should be processed
//  * @param {Number} totalTime The total time for estimations in a miliseconds
//  */
// const prioritizeAndFitToTotalTime = (
//   transitions: ITransition[],
//   totalTime: number
// ) => {
//   return transitions.reduce<{
//     totalUSD: number;
//     transitionsAcc: ITransition[];
//     totalTime: number;
//     transitionsTotalTime: number;
//   }>(
//     (
//       acc: {
//         totalUSD: number;
//         transitionsAcc: ITransition[];
//         totalTime: number;
//         transitionsTotalTime: number;
//       },
//       curr: ITransition
//     ) => {
//       let { totalUSD, transitionsAcc, transitionsTotalTime } = acc;
//       const latency = ApiLatencies[curr.bankCountryCode];
//       if (totalTime >= latency) {
//         totalTime -= latency;
//         transitionsTotalTime += latency;
//         transitionsAcc.push(curr);
//         totalUSD += curr.amount;
//       }
//       return {
//         totalUSD,
//         transitionsAcc,
//         totalTime,
//         transitionsTotalTime,
//       };
//     },
//     { totalUSD: 0, transitionsAcc: [], totalTime, transitionsTotalTime: 0 }
//   );
// };
// // Write the result in to table
// const convertResultInTableFormat = (
//   headers: string[],
//   totalTime: number,
//   result: {
//     transitionsTotalTime: number;
//     totalUSD: number;
//     transitionsAcc: ITransition[];
//   }
// ) => {
//   const { transitionsTotalTime, totalUSD, transitionsAcc } = result;
//   const innerResult = `<h2 style="text-align:center">Total USD: ${totalUSD}, Total Time: ${totalTime}, Transitions Total Time:${transitionsTotalTime} transitions:</h2>\n`;
//   let table = '<table>\n';

//   table = table.concat('<tbody>', '\n');
//   table = table.concat('<tr>', '\n');
//   for (let header of headers) {
//     table = table.concat(`<td>${header}</td>`, '\n');
//   }
//   table = table.concat('</tr>', '\n');

//   for (let transition of transitionsAcc) {
//     table = table.concat('<tr>', '\n');
//     table = table.concat('<td>', transition.id, '</td>', '\n');
//     table = table.concat('<td>', transition.amount.toString(), '</td>', '\n');
//     table = table.concat('<td>', transition.bankCountryCode, '</td>', '\n');
//     if (isShowLatencyValue) {
//       table = table.concat(
//         '<td>',
//         ApiLatencies[transition.bankCountryCode].toString(),
//         '</td>',
//         '\n'
//       );
//     }
//     table = table.concat('</tr>', '\n');
//   }
//   table = table.concat('</tbody>', '\n', '</table>');

//   return innerResult.concat(table);
// };

// const appDiv: HTMLElement = document.getElementById('app');
// const transitionsSortedA = sortAAndSlice(transitions);
// const transitionsSortedB = sortBAndSlice(transitions);
// // let transitionsSorted = sortBAndSlice(transitions);
// // Execute and write the result
// appDiv.innerHTML = convertResultInTableFormat(
//   headerTransitions,
//   1000,
//   prioritizeAndFitToTotalTime(transitionsSortedA, 1000) // 50ms
// ).concat(
//   convertResultInTableFormat(
//     headerTransitions,
//     1000,
//     prioritizeAndFitToTotalTime(transitionsSortedB, 1000) // 50ms
//   )
// );
// .concat(
//   convertResultInTableFormat(
//     headerTransitions,
//     prioritizeAndFitToTotalTime(transitions, 60) //60ms
//   )
// )
// .concat(
//   convertResultInTableFormat(
//     headerTransitions,
//     prioritizeAndFitToTotalTime(transitions, 90) //50ms
//   )
// )
// .concat(
//   convertResultInTableFormat(
//     headerTransitions,
//     prioritizeAndFitToTotalTime(transitions, 1000) //1000ms
//   )
// );
