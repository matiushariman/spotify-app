const displayGreetings = () => {
  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    return 'Good morning';
  } else if (currentTime < 18) {
    return 'Good afternoon';
  }

  return 'Good evening';
};

export function Greetings() {
  return <h1 className="text-3xl font-bold">{displayGreetings()}</h1>;
}

export default Greetings;
