import { 
    Bullet, 
    BulletSet, 
    Code, 
    CodeContainer, 
    Container, 
    Header, 
    Number, 
    NumberSet, 
    PageColumn, 
    PageContainer, 
    PageRow, 
    SearchBar, 
    SearchBarText, 
    Skeleton, 
    Window, 
    WindowTitle 
} from "./styles";






export function ModalCode() {
    return (
        <Container>
            <Header>
                <BulletSet>
                    <Bullet className="red" />
                    <Bullet className="yellow" />
                    <Bullet className="green" />
                </BulletSet>

                <Window>
                    <WindowTitle>index.tsx</WindowTitle>
                </Window>
            </Header>

            <CodeContainer>
                <NumberSet>
                    <Number>1</Number>
                    <Number>2</Number>
                    <Number>3</Number>
                    <Number>4</Number>
                    <Number>5</Number>
                    <Number>6</Number>
                    <Number>7</Number>
                </NumberSet>

                
                <Code>
                    <div>
                        <span>export function Modal() &#123;</span>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        return (
                    </div>
                    <div style={{marginLeft: '40px'}}>
                        <span>
                            &#60;<span className="colored">Container</span>&#62;
                        </span>
                    </div>
                    <div style={{marginLeft: '40px'}}>
                        <span>
                            &#60;
                            <span className="colored">Button</span> title=&#123;title&#125;/&#62;
                        </span>
                    </div>
                    <div style={{marginLeft: '40px'}}>
                        <span>
                            &#60;/<span className="colored">Container</span>&#62;
                        </span>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        )
                    </div>
                    <div>
                        <p>&#125;</p>
                    </div>

                </Code>
            </CodeContainer>
        </Container>
    )
}




export function ModalInterface() {
    return(
        <Container className="modalInterface">
            <Header>
                <BulletSet>
                    <Bullet className="red" />
                    <Bullet className="yellow" />
                    <Bullet className="green" />
                </BulletSet>

                <SearchBar>
                    <SearchBarText>localhost:3000</SearchBarText>
                </SearchBar>
            </Header>

            <PageContainer>
                <PageColumn>
                    <Skeleton width="100%" height="15px" />
                    <Skeleton width="100%" height="100%" />
                </PageColumn>
                <PageColumn alignItems="flex-end">
                    <PageRow justifyContent="flex-end">
                        <Skeleton width="50%" height="40px" />
                        <Skeleton width="35%" height="25px" bg="#3AB8FF" />
                    </PageRow>
                    <Skeleton width="100%" height="90px" />
                </PageColumn>
            </PageContainer>
        </Container>
    )
}