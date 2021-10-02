import Page from "../components/Page"
import Card from "../components/Card"
import WithSuspense from "../containers/WithSuspense"
import Pool from "./info/Pool"

const Info = () => (
  <Page>
    <Card title="Pool">
      <WithSuspense>
        <Pool />
      </WithSuspense>
    </Card>
  </Page>
)

export default Info
