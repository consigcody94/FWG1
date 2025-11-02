import { createClient } from '@sanity/client'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

// Create Sanity client with write token
const client = createClient({
  projectId: 's8by8xgm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'sk61jN1co7Ufby7rb3n2owPjS6AAGwKErx0zTNRp5x6uvg10b23kYxFPtMPB3SzWCJMIhqfubPccvwR8ztJITNMVFhp9talD76SnqPViMvA25E4EOhdbqaalFEYWW9dX1yK0JK4r2fMn4X5gIHI2N3gxgO43JNzaFNF33WQ1S2CyW3utQHpy',
  useCdn: false,
})

// Map JSON filenames to proper slugs
const slugMap: Record<string, string> = {
  'home': 'home',
  'about': 'about',
  'services': 'services',
  'careers': 'careers',
  'contracts': 'contracts',
  'contact': 'contact',
  'privacy-policy': 'privacy-policy',
  'employee-portal': 'employee-portal',

  // About pages
  'why-fwg': 'about/why-fwg',
  'our-clients': 'about/our-clients',
  'commitment-to-quality': 'about/commitment-to-quality',
  'success-stories': 'about/success-stories',
  'caring-in-the-community': 'about/caring-in-the-community',

  // Career pages
  'careers-apply': 'careers/apply',
  'careers-benefits': 'careers/benefits',
  'careers-life-at-fwg': 'careers/life-at-fwg',
  'careers-current-openings': 'careers/current-openings',

  // Job postings
  'e-discovery-analyst': 'careers/e-discovery-analyst',
  'enterprise-architect': 'careers/enterprise-architect',
  'help-desk-specialist': 'careers/help-desk-specialist',
  'it-asset-manager': 'careers/it-asset-manager',
  'it-project-site-lead': 'careers/it-project-site-lead',
  'itsecurityspecialist': 'careers/itsecurityspecialist',
  'network-engineer': 'careers/network-engineer',
  'project-manager': 'careers/project-manager',
  'senior-project-online-analyst': 'careers/senior-project-online-analyst',
  'system-administration': 'careers/system-administration',

  // Service pages
  'program-management': 'services/program-management',
  'it-infrastructure': 'services/it-infrastructure',
  'enterprise-architecture': 'services/enterprise-architecture',
  'it-security': 'services/it-security',

  // Contract pages
  'contracts-ciosp3': 'contracts/ciosp3',
  'contracts-ctoea': 'contracts/ctoea',
  'contracts-usac': 'contracts/usac',
  'contracts-gsa-mas': 'contracts/gsa-mas-54151s',
}

function transformBlock(block: any) {
  const { __typename, ...rest } = block

  // Extract block type from __typename (e.g., "PagesBlocksHero" -> "hero")
  const _type = __typename?.replace('PagesBlocks', '').toLowerCase() || 'unknown'

  return {
    _type,
    _key: Math.random().toString(36).substr(2, 9),
    ...rest,
  }
}

async function migratePage(filename: string, jsonData: any) {
  const basename = filename.replace('.json', '')
  const slug = slugMap[basename] || basename

  console.log(`\nMigrating: ${filename} -> ${slug}`)

  try {
    const doc = {
      _type: 'page',
      _id: `page-${slug.replace(/\//g, '-')}`,
      title: jsonData.title || basename,
      description: jsonData.description || '',
      slug: {
        _type: 'slug',
        current: slug,
      },
      blocks: jsonData.blocks?.map(transformBlock) || [],
    }

    const result = await client.createOrReplace(doc)
    console.log(`✅ Created/Updated: ${slug}`)
    return result
  } catch (error) {
    console.error(`❌ Error migrating ${filename}:`, error)
    throw error
  }
}

async function main() {
  console.log('🚀 Starting migration from JSON to Sanity...\n')

  const pagesDir = join(process.cwd(), 'content/pages')
  const files = readdirSync(pagesDir).filter(f => f.endsWith('.json'))

  console.log(`Found ${files.length} pages to migrate\n`)

  let successCount = 0
  let errorCount = 0

  for (const file of files) {
    try {
      const filePath = join(pagesDir, file)
      const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'))
      await migratePage(file, jsonData)
      successCount++
    } catch (error) {
      console.error(`Failed to migrate ${file}`)
      errorCount++
    }
  }

  console.log(`\n✨ Migration complete!`)
  console.log(`   ✅ Successful: ${successCount}`)
  console.log(`   ❌ Failed: ${errorCount}`)
}

main().catch(console.error)
