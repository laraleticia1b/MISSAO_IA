let nome = "";

function iniciar() {

    nome = document.getElementById("nome").value.trim();

        if (nome === "") {
                alert("Digite seu nome para iniciar a missão.");
                        return;
                            }

                                document.getElementById("inicio").style.display = "none";
                                    document.getElementById("jogo").style.display = "block";

                                        document.getElementById("titulo").innerHTML = "Missão: O Futuro da Humanidade";

                                            document.getElementById("texto").innerHTML =
                                                `Ano de 2055.

                                                ${nome}, você é um dos principais especialistas em Inteligência Artificial do planeta.

                                                Uma poderosa IA chamada <strong>NEXUS</strong> começou a substituir pessoas em praticamente todas as profissões. Embora a produção tenha aumentado, milhões de trabalhadores perderam seus empregos e passaram a depender das máquinas.

                                                Os líderes mundiais pediram sua ajuda para decidir o futuro da humanidade.

                                                Qual será sua decisão?`;

                                                    document.getElementById("btn1").innerHTML = "Regular a IA";
                                                        document.getElementById("btn2").innerHTML = "Humanos e IA trabalhando juntos";

                                                            document.getElementById("btn1").onclick = final1;
                                                                document.getElementById("btn2").onclick = final2;

                                                                }

                                                                function final1() {

                                                                    document.getElementById("jogo").style.display = "none";
                                                                        document.getElementById("fim").style.display = "block";

                                                                            document.getElementById("resultado").innerHTML =

                                                                                `Parabéns, <strong>${nome}</strong>!

                                                                                Você decidiu criar leis para limitar a atuação da Inteligência Artificial.

                                                                                A tecnologia continuou evoluindo, mas sempre sob supervisão humana.

                                                                                Com isso, empregos importantes foram preservados e a sociedade encontrou um equilíbrio entre inovação e responsabilidade.

                                                                                Sua missão foi um sucesso!`;

                                                                                }

                                                                                function final2() {

                                                                                    document.getElementById("jogo").style.display = "none";
                                                                                        document.getElementById("fim").style.display = "block";

                                                                                            document.getElementById("resultado").innerHTML =

                                                                                                `Parabéns, <strong>${nome}</strong>!

                                                                                                Você escolheu incentivar a cooperação entre humanos e Inteligência Artificial.

                                                                                                As máquinas passaram a realizar tarefas repetitivas, enquanto as pessoas se dedicaram à criatividade, à ciência e às relações humanas.

                                                                                                O mundo entrou em uma nova era de desenvolvimento tecnológico com inclusão e respeito às pessoas.

                                                                                                Sua missão foi um sucesso!`;

                                                                                                }