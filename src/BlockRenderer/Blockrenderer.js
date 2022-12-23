

export default function BlockRenderer({blocks}) {
    if(!blocks) return <></>
    // console.log(blocks)
    return blocks?.map((block, index) => {
        switch(block.acf_fc_layout) {
            case 'hero':
                return <div key={index}>Test</div>
            case 'split':
                return <div key={index}>split</div>
        }
    })
}