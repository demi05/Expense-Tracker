import Balance from "./Balance";
import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
