const QuestionsP = ({ Comp }: any) => {
  return (
    <main>
      <>{Comp ? <Comp /> : <h1>QuestionsP</h1>}</>
    </main>
  );
};
export default QuestionsP;
