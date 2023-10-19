function History({ allClicks }) {
  // This is the conditional rendering function
  if (allClicks.length === 0) {
    return <div>The app is used by pressing the button.</div>;
  }

  return <div>Button press history: {allClicks.join("")}</div>;
}

export default History;
