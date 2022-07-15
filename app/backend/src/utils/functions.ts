function goalsFavor(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => acc + curr.homeTeamGoals, 0);
}

function goalsOwn(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => acc + curr.awayTeamGoals, 0);
}

function totalPoints(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => {
    let contador = acc;
    // console.log(JSON.parse(JSON.stringify(team)));
    if (curr.homeTeamGoals > curr.awayTeamGoals) contador += 3;
    if (curr.homeTeamGoals === curr.awayTeamGoals) contador += 1;
    return contador;
  }, 0);
}

function totalGames(matchesHome:any) {
  return matchesHome.length;
}

function totalVictores(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => {
    let contador = acc;
    if (curr.homeTeamGoals > curr.awayTeamGoals) contador += 1;
    return contador;
  }, 0);
}

function totalDraws(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => {
    let contador = acc;
    if (curr.homeTeamGoals === curr.awayTeamGoals) contador += 1;
    return contador;
  }, 0);
}

function totalLosses(matchesHome:any) {
  return matchesHome.reduce((acc:any, curr:any) => {
    let contador = acc;
    if (curr.homeTeamGoals < curr.awayTeamGoals) contador += 1;
    return contador;
  }, 0);
}

export { goalsFavor, goalsOwn, totalPoints, totalGames,
  totalVictores, totalDraws, totalLosses };
